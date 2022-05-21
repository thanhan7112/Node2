import { useState } from "react";
import { ethers } from "ethers";
import TransactionM from "./TransactionM";
import { Button } from "react-bootstrap";
import { FaEthereum } from "react-icons/fa";
const startPayment = async ({ setError, setTxs, ether, addr }) => {
    
    try {
        window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
            to: "0xfA0294310A6304AB50819F66D642d9f1511e402A",
            from: addr,
            value: ethers.utils.parseEther(ether)
        });
        console.log({ ether, addr });
        console.log("tx", tx);
        setTxs([tx]);
    } catch (err) {
        setError(err.message);
    }
};

export default function Metamask() {
    const [txs, setTxs] = useState([]);
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });
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
            addr: data.get("addr")
        });
    };
    return (
        <div>
            <form className="m-4" onSubmit={handleSubmit}>
                <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                    <main className="mt-4 p-4">
                        <div>
                            <Button onClick={btnhandler} variant="primary">
                                Connect to wallet
                            </Button>
                            <h3 style={{ float: 'right' }}>{data.Balance}<FaEthereum style={{marginTop:'-5px'}}/></h3>
                        </div>
                        <center style={{ marginTop: '30px' }}>
                            <h1 className="text-xl font-semibold text-gray-700 text-center">
                                ETH payment
                            </h1>
                            <div className="">
                                <div className="my-3">
                                    <input
                                        type="text"
                                        name="addr"
                                        value={data.address}
                                        className="input input-bordered block w-full focus:ring focus:outline-none"
                                        placeholder="Recipient Address"
                                    />
                                </div>
                                <div className="my-3">
                                    <input
                                        name="ether"
                                        type="text"
                                        className="input input-bordered block w-full focus:ring focus:outline-none"
                                        placeholder="Amount in ETH"
                                    />
                                </div>
                            </div>
                        </center>
                    </main>
                    <footer className="p-4">
                        <button
                            type="submit"
                            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                        >
                            Pay now
                        </button>
                        <TransactionM txs={txs} />
                    </footer>
                </div>
            </form>
        </div>
    );
}
