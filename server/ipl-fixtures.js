var jsdom = require('jsdom')
var redis = require('redis')

var days = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6
}

var months = {
    apr: 3,
    may: 4
}

jsdom.env({
    html:'http://www.espncricinfo.com/indian-premier-league-2013/content/series/586733.html?template=iplfixtures',
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function(err,win){
        var client = redis.createClient()
        var $ = win.$
        var matchRows = $('.ciSerFixtContainer table:last>tr')
        var fixtures = []
        matchRows.each(function(idx){
            if(idx % 2 === 0){
                var infos = $(this).find('td')

                var when = $(infos[0]).find('b').html().split(' ')
                var dayOfWeek = when[0]
                var month = when[1]
                var date = when[2]
                var time = $(infos[0]).find('.fixGMTTxt').html().split('|')[0].trim().split(' ')[0]
                

                var who = $(infos[1]).find('a')

                if(!!who.html()){
                    var matchId = $(who).attr('href').split("/").slice(-1)[0].split(".")[0].trim()
                }else{
                    var matchId = ''
                    who = $(infos[1])
                }
                
                var match = $($(who).find('b')).html().split('-')[0].trim()
                var teams = $($(who).find('b')).html().split('-')[1].trim()
                var team1 = teams.split(' v ')[0].trim()
                if(teams.split(' v ').length === 3) {
                    var team2 = (teams.split(' v ')[1]+teams.split(' v ')[2]).trim()
                } else {
                    var team2 = teams.split(' v ')[1].trim()    
                }

                var fixture = {
                    day : days[dayOfWeek.toLowerCase()],
                    month: months[month.toLowerCase()],
                    date: parseInt(date),
                    year: 2013,
                    hour: parseInt(time.split(":")[0]),
                    min: parseInt(time.split(":")[1]),
                    match: match.toLowerCase(),
                    team1: team1.toLowerCase(),
                    team2: team2.toLowerCase(),
                    matchId: matchId
                }

                fixtures.push(fixture)

                console.log(JSON.stringify(fixture)) 
            }
        })
        client.set('allsports:cricket:ipl:fixtures', JSON.stringify(fixtures), redis.print)
        client.quit()
    }
})