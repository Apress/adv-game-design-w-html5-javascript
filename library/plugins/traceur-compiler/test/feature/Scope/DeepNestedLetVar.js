// Options: --block-binding

var a = 'var a';
{
  var b = 'var b';
  {
    let c = 'let c';
    {
      var d = 'var d';
    }
  }
}

// ----------------------------------------------------------------------------
