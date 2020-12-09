document.querySelectorAll('.horizontal-scroll').forEach((item, i) => {
  item.addEventListener('wheel', (e) => {
    let maxScrollLeft = item.scrollWidth - item.clientWidth;
    if((item.scrollLeft > 0) && (item.scrollLeft < maxScrollLeft)){
      e.preventDefault();
      document.querySelector('html').scrollTo(0, item.offsetHeight)
      console.log(item.scrollLeft)

    }else{
      console.log('out')
    }
    item.scrollLeft += e.deltaY * 30;
  })
});
