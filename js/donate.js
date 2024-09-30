

    // common main function :

    document.getElementById('btn-donate-now').addEventListener('click', function(){


        


        const mainBalance = getTextFieldValueById('main-balance');
        const donationBalance = getTextFieldValueById('donation-balance');
        const inputDonation = getInputFieldValueById('input-donation');
        document.getElementById('input-donation').value = '';


        // condition start
        if(isNaN(inputDonation)){
            alert('Invalid Donation Amount');
            return;
        } 
        if(mainBalance < inputDonation){
            alert('Invalid Donation Amount')
            return;
        }

        if(inputDonation < 0){
            alert('Invalid Donation Amount')
            return;
        }
        // condition end



        
        const newBalance = mainBalance - inputDonation;
        const newDonationBalance = donationBalance + inputDonation;
        document.getElementById('main-balance').innerText = newBalance;
        document.getElementById('donation-balance').innerText = newDonationBalance;




        // modal
        document.getElementById('my_modal_1').showModal();

        


        // history part start
        const foundationName = document.getElementById('donation-heading').innerText;
           const div = document.createElement('div');
           div.classList.add('border-2','p-10','rounded-lg','text-xl', 'space-y-4');
           div.innerHTML =  `
           <p class="font-bold text-2xl">${inputDonation} Taka is Donated for ${foundationName}</p>
           <p class="text-gray-500 ">Date:  ${new Date().toLocaleString('en-bd',{
            weekday:'long', 
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric',  
            timeZoneName:'short'
        })} (Bangladesh Standard Time)</p>
           
           `;
           document.getElementById('history-container').appendChild(div);

        
    })
   





    // card 2 


    document.getElementById('btn-donate-now-2').addEventListener('click', function(){



        const mainBalance = getTextFieldValueById('main-balance');
        const donationBalance2 = getTextFieldValueById('donation-balance-2');
        const inputDonation2 = getInputFieldValueById('input-donation-2');
        document.getElementById('input-donation-2').value = '';



              // condition start
              if(isNaN(inputDonation2)){
                alert('Invalid Donation Amount');
                return;
            } 
            if(mainBalance < inputDonation2){
                alert('Invalid Donation Amount')
                return;
            }
    
            if(inputDonation2 < 0){
                alert('Invalid Donation Amount')
                return;
            }
            // condition end





            const newBalance = mainBalance - inputDonation2;
        const newDonationBalance = donationBalance2 + inputDonation2;
        document.getElementById('main-balance').innerText = newBalance;
        document.getElementById('donation-balance-2').innerText = newDonationBalance;



           // modal
           document.getElementById('my_modal_1').showModal();




         // history part start
         const foundationName = document.getElementById('donation-heading-2').innerText;
         const div = document.createElement('div');
         div.classList.add('border-2','p-10','rounded-lg','text-xl', 'space-y-4');
         div.innerHTML =  `
         <p class="font-bold text-2xl">${inputDonation2} Taka is Donated for ${foundationName}</p>
         <p class="text-gray-500 ">Date:  ${new Date().toLocaleString('en-bd',{
          weekday:'long', 
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric', 
          minute: 'numeric', 
          second: 'numeric',  
          timeZoneName:'short'
      })} (Bangladesh Standard Time)</p>
         
         `;
         document.getElementById('history-container').appendChild(div);
    

    })




    // card -3 


    document.getElementById('btn-donate-now-3').addEventListener('click', function(){



        const mainBalance = getTextFieldValueById('main-balance');
        const donationBalance3 = getTextFieldValueById('donation-balance-3');
        const inputDonation3 = getInputFieldValueById('input-donation-3');
        document.getElementById('input-donation-3').value = '';



              // condition start
              if(isNaN(inputDonation3)){
                alert('Invalid Donation Amount');
                return;
            } 
            if(mainBalance < inputDonation3){
                alert('Invalid Donation Amount')
                return;
            }
    
            if(inputDonation3 < 0){
                alert('Invalid Donation Amount')
                return;
            }
            // condition end





            const newBalance = mainBalance - inputDonation3;
        const newDonationBalance = donationBalance3 + inputDonation3;
        document.getElementById('main-balance').innerText = newBalance;
        document.getElementById('donation-balance-3').innerText = newDonationBalance;



           // modal
           document.getElementById('my_modal_1').showModal();


         // history part start
         const foundationName = document.getElementById('donation-heading-3').innerText;
         const div = document.createElement('div');
         div.classList.add('border-2','p-10','rounded-lg','text-xl', 'space-y-4');
         div.innerHTML =  `
         <p class="font-bold text-2xl">${inputDonation3} Taka is Donated for ${foundationName}</p>
         <p class="text-gray-500 ">Date:  ${new Date().toLocaleString('en-bd',{
          weekday:'long', 
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric', 
          minute: 'numeric', 
          second: 'numeric',  
          timeZoneName:'short'
      })} (Bangladesh Standard Time)</p>
         
         `;
         document.getElementById('history-container').appendChild(div);
    

    })