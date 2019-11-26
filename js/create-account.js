//listen for form submit
document.getElementById('creator').addEventListener('submit', saveAccount);
console.log(localStorage);
function saveAccount(e){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var password = document.getElementById('password').value;
    
    const account = {
        username: username,
        email: email,
        city: city,
        password: password,
        id: null
    }

    if (localStorage.getItem('accounts') === null){
        account.id = 0;
        var accounts = [];
        accounts[0] = account;
        localStorage.setItem('accounts', JSON.stringify(accounts));
    } else {       
        var accounts = JSON.parse(localStorage.getItem('accounts'));
        account.id = accounts.length;
        accounts.push(account);
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
    console.log(accounts);

    //event.preventDefault();
}