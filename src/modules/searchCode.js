import ajaxService from "./ajaxService";

const searchCode =()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        const City = document.querySelector('.city').value;
        let searchResponse;
        ajaxService(searchTerm, City)
        .then(result=>searchResponse=result)
        //.then(()=>document.querySelector(".result").innerHTML=`${result}`)
        .then(()=>console.log(searchResponse))
    })
}

export default searchCode