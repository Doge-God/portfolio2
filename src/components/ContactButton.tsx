interface iContactButtonProps {
    extLink:string
}

function ContactButton() {

    return (
          
            <div className=" w-full h-fit m-4 p-2
                shadow-lg-neu-5 rounded-2xl border-t-2 border-l-2 border-white
                flex "
                onClick={(e) => {
                    window.location.href = 'futianzhou@hotmail.com';
                    e.preventDefault();
                }}>
              Email
          </div>
          
          
          
    );
  }
  //onClick={()=>window.open(prop.extLink, "_blank")}
  
  export default ContactButton;