import './ball.css'

interface Props {
    count: number
}

const Ball: React.FC<Props> = ({count}) => {
    return (
        <div className="ball">
            <p className="count">{count}</p>
        </div>
    );
};

export default Ball;