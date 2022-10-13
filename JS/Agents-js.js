$(function(){

    $('.prev').click(function(){
        $('.content').hide(1000)
        $('.content').show(1000)
       let currImg = $('.current-img')
       let prevImg = currImg.prev()
       let currName = $('.current-name')
       let prevName = currName.prev()
       let currDesc = $('.current-desc')
       let prevDesc = currDesc.prev()
       let currAbi = $('.curr-abi')
       let prevAbi = currAbi.prev()
       let currAbilities = $('.current-abi')
       let prevAbilities = currAbilities.prev()

       if(prevImg.length != 0)
       {
           currImg.removeClass('current-img').css('z-index', -100)
           currName.removeClass('current-name').css('z-index', -100)
           currDesc.removeClass('current-desc').css('z-index', -100)
           currAbi.removeClass('curr-abi').css('z-index', -100)
           currAbilities.removeClass('current-abi').css('z-index', -100)
           prevImg.addClass('current-img').css('z-index', 100)
           prevName.addClass('current-name').css('z-index', 100)
           prevDesc.addClass('current-desc').css('z-index', 100)
           prevAbi.addClass('curr-abi').css('z-index', 100)
           prevAbilities.addClass('current-abi').css('z-index', 100)
       }
       else
       {
           let finalImage = currImg.nextAll().last()
           let finalName = currName.nextAll().last()
           let finalDesc = currDesc.nextAll().last()
           let finalAbi = currAbi.nextAll().last()
           let finalAbilities = currAbilities.nextAll().last()

           currImg.removeClass('current-img').css('z-index', -100)
           currName.removeClass('current-name').css('z-index', -100)
           currDesc.removeClass('current-desc').css('z-index', -100)
           currAbi.removeClass('curr-abi').css('z-index', -100)
           currAbilities.removeClass('current-abi').css('z-index', -100)
           finalImage.addClass('current-img').css('z-index', 100)
           finalName.addClass('current-name').css('z-index', 100)
           finalDesc.addClass('current-desc').css('z-index', 100)
           finalAbi.addClass('curr-abi').css('z-index', 100)
           finalAbilities.addClass('current-abi').css('z-index', 100)
       }
   })

    $('.next').click(function(){
        $('.content').hide(1000)
        $('.content').show(1000)
        let currImg = $('.current-img')
        let nextImg = currImg.next()
        let currName = $('.current-name')
        let nextName = currName.next()
        let currDesc = $('.current-desc')
        let nextDesc = currDesc.next()
        let currAbi = $('.curr-abi')
        let nextAbi = currAbi.next()
        let currAbilities = $('.current-abi')
        let nextAbilities = currAbilities.next()

        if(nextImg.length != 0)
         {
            currImg.removeClass('current-img').css('z-index', -100)
            currName.removeClass('current-name').css('z-index', -100)
            currDesc.removeClass('current-desc').css('z-index', -100)
            currAbi.removeClass('curr-abi').css('z-index', -100)
            currAbilities.removeClass('current-abi').css('z-index', -100)
            nextImg.addClass('current-img').css('z-index', 100)
            nextName.addClass('current-name').css('z-index', 100)
            nextDesc.addClass('current-desc').css('z-index', 100)
            nextAbi.addClass('curr-abi').css('z-index', 100)
            nextAbilities.addClass('current-abi').css('z-index', 100)
        }
        else
        {
            let firstImage = currImg.prevAll().last()
            let firstName = currName.prevAll().last()
            let firstDesc = currDesc.prevAll().last()
            let firstAbi = currAbi.prevAll().last()
            let firstAbilities = currAbilities.prevAll().last()

            currImg.removeClass('current-img').css('z-index', -100)
            currName.removeClass('current-name').css('z-index', -100)
            currDesc.removeClass('current-desc').css('z-index', -100)
            currAbi.removeClass('curr-abi').css('z-index', -100)
            currAbilities.removeClass('current-abi').css('z-index', -100)
            firstImage.addClass('current-img').css('z-index', 100)
            firstName.addClass('current-name').css('z-index', 100)
            firstDesc.addClass('current-desc').css('z-index', 100)
            firstAbi.addClass('curr-abi').css('z-index', 100)
            firstAbilities.addClass('current-abi').css('z-index', 100)
        }
    })
})