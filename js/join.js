$('#domainlist').on('change', function(){
    let opt = $(this).find('option:selected').val()
    if (opt !== 'noselect' && opt !== 'self') {
        $('#emaildomain').val(opt).attr({
            disabled:true
        })
    } else if (opt==='self') {
        $('#emaildomain').val('').attr({
            disabled:false
        }).focus()
    } else {
        $('#emaildomain').val('').attr({
            disabled:true
        })
    }
})

//아이디 입력 안내창
$('#form1').on('submit', function(){
  let idbox = $('.joinBox #idbox').val()
  if (!idbox) {
      alert('아이디를 입력하세요!')
      $('.joinBox #idbox').focus().css({
          borderColor:'#f00'
      })
      return false
  }
})
// 생년월일
const birthYearEl = document.querySelector('#birth-year')
isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function () {
  if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(var i = 1940; i <= 2022; i++) {
      const YearOption = document.createElement('option')
      YearOption.setAttribute('value', i)
      YearOption.innerText = i
      this.appendChild(YearOption);
    }
  }
});
const birthMonthEl = document.querySelector('#birth-month')
isMonthOptionExisted = false;
birthMonthEl.addEventListener('focus', function () {
  if(!isMonthOptionExisted) {
    isMonthOptionExisted = true
    for(var i = 1; i <= 12; i++) {
      const MonthOption = document.createElement('option')
      MonthOption.setAttribute('value', i)
      MonthOption.innerText = i
      this.appendChild(MonthOption);
    }
  }
});
const birthDayEl = document.querySelector('#birth-day')
isDayOptionExisted = false;
birthDayEl.addEventListener('focus', function () {
  if(!isDayOptionExisted) {
    isDayOptionExisted = true
    for(var i = 1; i <= 31; i++) {
      const DayOption = document.createElement('option')
      DayOption.setAttribute('value', i)
      DayOption.innerText = i
      this.appendChild(DayOption);
    }
  }
});

// 약관동의 
$('#all').on('click', function(){
  let check = $(this).prop('checked')
  // console.log(check)
  $('input[id^="co"]').prop('checked', check)
})

// 모달창
$(function(){ 

  $(".agreebox .agreebtn1").click(function(){
    $("#layer-popup").fadeIn();
  });
  
  $(".popbtn").click(function(){
    $("#layer-popup").fadeOut().scrollTop(0); 
  });
});


$(function(){ 

  $(".agreebox .agreebtn2").click(function(){
    $("#layer-popup-merge").fadeIn();
  });
  
  $(".popbtn2").click(function(){
    $("#layer-popup-merge").fadeOut().scrollTop(0); 
  });
});


$(function(){ 

  $(".agreebox .agreebtn3").click(function(){
    $("#layer-popup-info").fadeIn();
  });
  
  $(".popbtn3").click(function(){
    $("#layer-popup-info").fadeOut().scrollTop(0); 
  });
});