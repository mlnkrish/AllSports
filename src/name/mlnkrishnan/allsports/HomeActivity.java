package name.mlnkrishnan.allsports;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import name.mlnkrishnan.allsports.cricket.CricketActivity;

public class HomeActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }

    public void launchCricket(View view) {
        Intent cricket = new Intent(this, CricketActivity.class);
        startActivity(cricket);
    }
}
