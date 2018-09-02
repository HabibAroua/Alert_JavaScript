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

//https://sweetalert2.github.io/