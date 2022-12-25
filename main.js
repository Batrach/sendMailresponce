'use strict'

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form')
    const applicationform = document.getElementById('applicationform')
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        
        // let error = formValidate(form);

        let formData = new FormData(form);

        // formData.append('image', formImage.files[0])

        // if(error ===0){
            form.classList.add('none');
            applicationform.classList.remove('none')
            let response = await fetch('mail.php',{
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                formPrewiew.innerHTML = ''
                form.reset()
                form.classList.remove('_sending')
            }else{
                alert('ошибка')
                form.classList.remove('_sending')

            }
        // }else{
        //     alert('Заполните обязательные поля')
        // }

    }

    // function formValidate(form){
    //     let error = 0;
    //     let formReq = document.querySelectorAll('._req')
    //     for(let index = 0; index < formReq.length; index++){
    //         const input = formReq[index]
    //         formRemoveError(input )

    //         if(input.classList.contains('_email')){
    //             if(emailTest(input)){
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }else if(input.getAttribute('type')==='checkbox' && input.checked === false){
    //             formAddError(input);
    //             error++;
    //         }else{
    //             if(input.value ===''){
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }

    //         }
    //         return error;
    //     }
    

    // function formAddError(input){
    //     input.parentElement.classList.add('_error')
    //     input.classList.add('_error')
    // }
    // function formRemoveError(input){
    //     input.parentElement.classList.remove('_error')
    //     input.classList.remove('_error')
    // }

    //проверка на имейл
    // function emailTest(input){
    //     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    // }

    // Получаем инпут файл в переменную
    // const formImage = document.getElementById('formImage')
    //получаем див для превью
    // const formPrewiew = document.getElementById('formPrewiew')
    //Слушаем изменения в инпуте file
    // formImage.addEventListener('change', ()=>{
    //     uploadFile(formImage.files[0])
    // })

    // function uploadFile(file){
    //     //подтверждаем тип файла
    //     if(!['image/jpeg','image/png','image/gif'].includes(file.type)){
    //         alert('разрешены только изображения.');
    //         formImage.value-=''
    //         return;
    //     }
        //проверим размер файла(< 2mb)
        // if(file.size > 2*1024*1024){
        //     alert('Файл должен быть менее 2МБ');
        //     return;
        // }
        
    //     var reader = new FileReader();
    //     reader.onload = function(e){
    //         formPrewiew.innerHTML=`<img src="${e.target.result}" alt='Фото'>`;
    //     };
    //     reader.onerror=function(e){
    //         alert('Ошибка');
    //     };
    //     reader.readAsDataURL(file);
    // }

})
