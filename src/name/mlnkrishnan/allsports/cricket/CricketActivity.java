package name.mlnkrishnan.allsports.cricket;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import name.mlnkrishnan.allsports.R;
import name.mlnkrishnan.allsports.cricket.ipl.IplActivity;

public class CricketActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.cricket);
    }

    public void launchIpl(View view) {
        Intent ipl = new Intent(this, IplActivity.class);
        startActivity(ipl);
    }
}
