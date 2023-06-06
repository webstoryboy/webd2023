$(function(){
    // 이미지 슬라이드
    let currentIndex = 0; //현재 이미지 설정 
    $(".imageWrap").append($(".image").first().clone(true));    //첫 번째 이미지를 복사해서 마지막에 추가

    setInterval(() => { //3초에 한번씩 실행
        currentIndex++;     //현재 이미지를 1씩 증가
        $(".imageWrap").animate({marginTop: -400 * currentIndex+"px"}, 600);

        if(currentIndex == 3){  //마지막 이미지
            setTimeout(() => {  
                $(".imageWrap").animate({marginTop: 0}, 0);     //애니메이션을 정지
                currentIndex = 0;   //현재 이미지 초기화
            }, 600);
        }
    }, 3000);

    // 메뉴
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    // 팝업
    $(".popup-btn").click(function(){
        $(".popup-view").show();
    });
    $(".popup-close").click(function(){
        $(".popup-view").hide();
    });
});