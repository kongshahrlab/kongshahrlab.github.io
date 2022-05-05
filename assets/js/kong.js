$(document).ready(function(){

$('.persianDate').each(function () {
  var pDate = persianDate($(this).attr('data-timestamp'))
  $(this).text(pDate);
});
$('.content img').each(function () {
  if ($(this).attr('title')) {
    $(this).after('<figcaption class="figure-caption">'+$(this).attr('title')+'</figcaption>')
  }
})
})
function persianDate(timestamp) {
  var stampDate = new Date(timestamp*1000);
  var faDateM = stampDate.toLocaleDateString('fa-IR', { month: 'long'});
  var faDateY = stampDate.toLocaleDateString('fa-IR', { year: 'numeric'});
  var faDate = faDateM+' '+faDateY
  return faDate;
}
