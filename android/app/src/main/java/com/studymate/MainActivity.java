package com.notes;

import com.facebook.react.ReactActivity;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Bundle;
import android.content.Intent;

import androidx.annotation.Nullable;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(null);
  }



  @Override
  protected String getMainComponentName() {
    return "StudyMate";
  }
  @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
  }
}

