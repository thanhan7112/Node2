import { useState, useEffect } from "react";
import { ethers } from "ethers";
import TransactionM from "./TransactionM";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { FaEthereum } from "react-icons/fa";
import './metamask.css'
export default function Metamask() {
    const startPayment = async ({ setError, setTxs, ether, addr}) => {
        try {
            window.ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            ethers.utils.getAddress(addr);
            const tx = await signer.sendTransaction({
                to: AddTo[0].AddressWallet,
                from: addr,
                value: ethers.utils.parseEther(ether),
            });
            const xdata = {
                Name: products.Name,
                Price: products.Price,
                from: tx.from,
                to: tx.to,
                hash: tx.hash
            }
            console.log({ ether, addr});
            console.log("tx", tx);
            axios.post('http://localhost:8090/api/metamask', xdata)
            console.log(xdata)      
            setTxs([tx]);
        } catch (err) {
            setError(err.message);
        }
    };
    const getData = () => {
        fetch('http://localhost:8090/api/wallet')
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            setAddTo(res)
          })
      }
    const [AddTo, setAddTo] = useState({
        AddressWallet:""
    })
    useEffect(() => {
        getData()
      }, [])
    //   console.log("Day la AddressWallet "+ AddTo[0].AddressWallet)
    const [txs, setTxs] = useState([]);
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });
    // 
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8090/api/products/' + productId)
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    const btnhandler = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));
        } else {
            alert("install metamask, please!");
        }
    };
    const getbalance = (address) => {
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                setdata({
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };
    const accountChangeHandler = (account) => {
        setdata({
            address: account,
        });
        getbalance(account);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        await startPayment({
            setTxs,
            ether: data.get("ether"),
            addr: data.get("addr"),
        });
        if (startPayment.length !== 0) {
            return console.log(`Da mua `)
        } else {
            return console.log("Chua mua")
        }

    };

    return (
        <div className="Page">
        <div className="mainP">
            <div className="payment">
                <div className="Detail-Menu" >
                    <div className="text" style={{ width: '40%', marginTop: '4rem' }}>
                        <h3>{products.Name}</h3>
                        <p>Price: {products.Price} <FaEthereum style={{ marginTop: '-3px' }}></FaEthereum></p>
                        <p >Author: {products.Author}</p>
                        <p>Detail: {products.Detail}</p>
                    </div>
                    <div className="img" style={{ width: '60%', float: 'right', marginTop: '-9rem' }}>
                        <img alt="" src={products.profileImg}></img>
                    </div>
                </div>
                <form className="form-A" onSubmit={handleSubmit}>
                    <div className="credit-card " >
                        <main >
                            <div>
                                <Button style={{ marginLeft: '0.8rem' }} onClick={btnhandler} >
                                    Connect to wallet
                                </Button>
                                <h3 style={{ float: 'right' }}>{data.Balance}<FaEthereum className="icon" style={{ marginTop: '-0.3rem' }} /></h3>
                            </div>
                            <center >
                                <h3 className="text-xl font-semibold text-gray-700 text-center" style={{ paddingLeft: '1.5rem' }}>
                                    ETH payment
                                </h3>
                                <div >
                                    <div className="my-3">
                                        <input
                                            type="text"
                                            name="addr"
                                            value={data.address}
                                            className="input input-bordered block w-full focus:ring focus:outline-none"
                                            placeholder="Please connect with wallet"
                                        />
                                    </div>
                                    <div className="my-3">
                                        <input
                                            name="ether"
                                            type="text"
                                            value={products.Price}
                                            className="input input-bordered block w-full focus:ring focus:outline-none"
                                            placeholder="Amount in ETH"
                                        />
                                    </div>

                                </div>
                                <footer className="p-4">
                                    <button
                                        type="submit"
                                        style={{ color: 'white' }}
                                        className="btn submit-button focus:ring focus:outline-none w-full"
                                    >
                                        Pay now
                                    </button>

                                </footer>
                            </center>

                        </main>

                    </div>
                </form>
            </div>
            <TransactionM txs={txs} />
        </div>
        </div>
    );
}
