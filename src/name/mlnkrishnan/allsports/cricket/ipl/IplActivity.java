package name.mlnkrishnan.allsports.cricket.ipl;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import name.mlnkrishnan.allsports.R;

public class IplActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.ipl);
    }

    public void launchIplTeams(View view) {
        Intent iplTeams = new Intent(this, IplTeamsActivity.class);
        startActivity(iplTeams);
    }
}
