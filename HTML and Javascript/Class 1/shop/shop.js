window.onload = () => {
    const cart = document.getElementById("cart");
    document.getElementById("purchaseSushi").onclick = () => {
        let picture = document.getElementById("sushiImage");
        let price = document.getElementById("sushiPrice");

        document.getElementById("purchaseSushi").style.display = 'none';
        document.getElementById("empty").style.display = 'none';

        cart.innerHTML = `
            <tr>
                <td>${picture.innerHTML}</td>
                <td>${price.innerHTML}</td>
            </tr>
        `;
    }


    document.getElementById("purchaseCaptain").onclick = () => {
        
    }
}