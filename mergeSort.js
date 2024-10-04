function merge(a, b) {
  let c = [];
  i = 0;
  j = 0;
  k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c[k++] = a[i++];
    } else {
      c[k++] = b[j++];
    }
  }
  for (; i < a.length; i++) {
    c[k++] = a[i];
  }
  for (; j < b.length; j++) {
    c[k++] = b[j];
  }

  return c;
}

function mergeSort(arr) {
  x = arr;
  if (arr.length === 1) return arr;

  const m = Math.ceil(arr.length / 2);
  const y = x.splice(m);

  return merge(mergeSort(x), mergeSort(y));
}

console.log(mergeSort([105, 79, 100, 110]));
