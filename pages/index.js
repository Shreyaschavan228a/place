import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';

export default function Home() {
    return (
        <div className="flex justify-around flex-col align-center h-screen w-screen">
            <Header />
            <MainContainer />
            <Footer />
        </div>
    );
}
