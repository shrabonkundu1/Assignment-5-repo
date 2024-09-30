document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = './blog.html';
})



document.getElementById('btn-donation').addEventListener('click', function(){
    
    btnHistory.classList.remove(
        "bg-lime-300"
   );
   btnDonation.classList.add(
        "bg-lime-300"
   )
    showSectionById('donation-section');

})


const btnHistory = document.getElementById('btn-history');
    const btnDonation = document.getElementById('btn-donation');
document.getElementById('btn-history').addEventListener('click', function(){
    
    showSectionById('history-section');

    btnHistory.classList.add(
        "bg-lime-300"
    );
    btnDonation.classList.remove(
        "bg-lime-300"
    )

})














