function Christmas() {
    return (
        <div className="christmas">
        <Helmet>
            <title> Christmas Events</title>
            <meta name= "Christmas Page" content = "All things Christmas"/>
        </Helmet>
        <h1 className="center-text">
         <u> Christmas Tree lot </u>
        </h1>
        <hr></hr>
        <pre className=" Christmaspre">
            Welcome to our tree lot! We proudly offer a
            fantastic
            selection of quality Frasier Fir, Balsam Fir, and
            Scotch Pine 
            trees, along with pine roping, tree stands, and tree kits

            A heartfelt thank you to all our returning 
            customers-we
            cant wait to see you again this year! if you
            haven't visited
            us before, we invite you to stop by and check out
            our
            beautiful trees and friendly service.
        </pre>
        <img src = "TreeLot.png" alt = "Christmas Tree Lot"
        style ={{bottom: "0px", right: "0px", width: "150px",}}
        />
        </div>
    );
}

export default Christmas;