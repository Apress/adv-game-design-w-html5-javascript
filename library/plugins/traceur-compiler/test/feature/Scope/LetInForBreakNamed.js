// Options: --block-binding

outer:
for (var x = 0; x < 10; x ++) {
  for (var y = 0; y < 10; y ++) {
    let z = 'let z';
    if (x == 7) {
      break outer;
    }
  }
}

// ----------------------------------------------------------------------------
