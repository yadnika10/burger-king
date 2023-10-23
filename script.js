const audio = new Audio("idsound.wav")
function getRandomTime(){
    return Math.floor(Math.random() * 5000) + 2000;
}
function getRandomOrderId(){
    audio.play();
    return Math.floor(Math.random() * 1000) + 100; 
}

document.getElementById('order-button').addEventListener('click',function(){
    const itemsAdded = [];
    const checkBoxes = document.getElementsByName('foodItem');
    console.log(checkBoxes);

    checkBoxes.forEach(function(checkbox){
        if(checkbox.checked){
            itemsAdded.push(checkbox.value);
            console.log(checkbox.value);
        }
    });
    if(itemsAdded.length === 0){
        alert("Please select atleast one item");
        return;
    }

    const orderButton = document.getElementById('order-button');
    orderButton.disabled = true;

    const foodImage = document.getElementById('foodImage');
    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');

    orderIdElement.style.display = 'none';
    foodImage.style.display = 'none';

    const p1 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },getRandomTime());
    });

    p1.then(function(){
        const orderId = getRandomOrderId();
        console.log(orderId);
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';

        const foodtoShow =  itemsAdded[Math.floor(Math.random() * itemsAdded.length)]
        console.log(foodtoShow);

        switch(foodtoShow){
            case 'Burger':
                foodImage.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                break;
            case 'Fries':
                foodImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                break;
            case 'Drink':
                foodImage.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                break;
            default:
                foodImage.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        }

        foodImage.style.display = 'block';
        orderButton.disabled = false;
    })
})