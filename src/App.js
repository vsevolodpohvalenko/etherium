import './App.css';
import {useEffect} from "react";
import detectEthereumProvider from '@metamask/detect-provider';

function App() {




    useEffect(() => {

        (async function () {

            const provider = await detectEthereumProvider();

            if (provider) {
                console.log("Hello")// Initialize your app
            } else {
                console.log("Provider")
                console.log('Please install MetaMask!');
            }

        })();
    }, []);

    async function onInit() {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(account)
        window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            console.log(accounts[0])
        });
    }

    onInit();

    return (
        <div className="App">
            <div>Hello World</div>

        </div>
    );
}

export default App;
