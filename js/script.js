/*
1. 분류 별 필터링 기능
filterInit()
2. 팝업 기능
 modalInit()
3. 텍스트 클리핑 마스크 애니메이션
 textMaskAnimation()
 */
filterInit()
modalInit()
closeModal();



function filterInit(){
    $('.fbtn').on('click',function(){
        // 1. 클릭된 버튼의 data속성을 취득
        // const type = $(this).attr('data-btn');
        const type = $(this).data("btn");

        // 2. 모두 숨김
        $('.item').hide();

        // 3. 일치하면(조건부) 표시

        // 4. .item의 data속성과 비교 type
        if(type === "all"){
            $('.item').fadeIn();
        } else {
            $(`.item[data-item="${type}"]`).fadeIn();
        }

    })
}
function modalInit(){
    $('.item[data-url]').on('click',function(){
        const url = $(this).data('url');
        if(url){
            $('#modal').fadeIn(300);
            $('#modal-body').load(url);
            $('body').addClass('modal-open');
        }
    });
}
function closeModal(){
    $('#modal').fadeOut();
    $('body').removeClass('modal-open');
}
$('.close').on('click',closeModal);
$(window).on('click', (e)=>{
    if(e.target.id === "modal"){
        closeModal();
    }
})