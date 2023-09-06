import TemporaryExpertCard from "./temporaryExpertCard";

function Expert(){

    return (
        <div className="tempExpert">
            <h1 style={{fontSize: '40px', color: '#F42053'}}>Find Instant Support</h1>
            <p style={{margin: '30px'}}>1000+ Experts with years of experience in counselling and successfully helping people overcome their emotions</p>
            <div className="tempExpertCardList">
                <TemporaryExpertCard />
                <TemporaryExpertCard />
                <TemporaryExpertCard />
            </div>
            <a href="/experts"><button className="browseExpertBtn">Browse All Experts</button></a>
        </div>
    )
}

export default Expert;