function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}

// ======================
class MyRespondse {
  header = 'response header';
  result = 'response results';
}

class MyError {
  header = 'error header';
  message = 'error message';
}

function handle(res: MyRespondse | MyError) {
  if (res instanceof MyRespondse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

// ===========================
type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
  // ...
}

setAlertType('success');
setAlertType('warning');
// setAlertType('default'); // Error
