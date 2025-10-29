import treeLot from "./TreeLot.png";

function Christmas() {
    return (
        <div className="christmas">
            <h1 style={{ textAlign: 'center' }}>
                <u>Christmas Tree Lot</u>
            </h1>

            <hr />

            <pre style={{
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                fontFamily: 'inherit',
                margin: 0
            }}>
Welcome to our tree lot! We proudly offer a fantastic
selection of quality Frasier Fir, Balsam Fir, and Scotch Pine
trees, along with pine roping, tree stands, and tree kits

A heartfelt thank you to all our returning customers we
can't wait to see you again this year! If you haven't visited
us before, we invite you to stop by and check out our
beautiful trees and friendly service.
            </pre>

            <img
                src={treeLot}
                alt="Christmas Tree Lot"
                style={{
                    position: 'fixed',
                    bottom: '0px',
                    right: '0px',
                    height: '200px',
                    width: '600px'
                }}
            />
        </div>
    );
}

export default Christmas;