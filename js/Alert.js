function validation()
{
    swal
    (
        'The Internet?',
        'That thing is still around?',
        'question'
    );
}
         
function basicMessage(text)
{
    swal(text);
}

function errorMessage(title,text,footer)
{
    swal
    (
        {
            type: 'error',
            title: title,
            text: text,
            footer: footer
        }
    );
}

function ImageMessage(imageUrl,imageHeight,imageAlt)
{
    swal
    (
        {
            imageUrl: imageUrl,
            imageHeight: imageHeight,
            imageAlt: imageAlt
        }
    );
}

function positionedDialog(position,type,title,showConfirmButton,timer)
{
    swal
    (
        {
            position: position,
            type: type,
            title: title,
            showConfirmButton: showConfirmButton, //booleen
            timer: timer
        }
    );
}

function CustomAnimation(title,animation,c)
{
    
    swal
    (
        {
            title: 'Custom animation with Animate.css',
            animation: false,
            customClass: 'animated tada'
        }
    );
}
//https://sweetalert2.github.io/