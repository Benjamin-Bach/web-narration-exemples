document.querySelectorAll('.horizontal-scroll').forEach((item, i) => {
  item.addEventListener('wheel', (e) => {
    let maxScrollLeft = item.scrollWidth - item.clientWidth;
    if((item.scrollLeft > 0) && (item.scrollLeft < maxScrollLeft)){
      e.preventDefault();
    }
    item.scrollLeft += e.deltaY * 30;
  })
});
