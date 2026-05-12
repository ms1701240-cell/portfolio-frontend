import { useEffect, useState } from "react";
import axios from 'axios';

const Formshow = () => {
    const [show, setshow] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        shower();
    }, []);

    const shower = async () => {
        try {
            // الرابط المباشر للنسخة الـ Ready على Vercel
            const res = await axios.get("https://portfolio-api-five-henna.vercel.app/seenfeed");
            setshow(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Fetch error:", err);
            setLoading(false);
            // لو طلع فشل اتصال هنا، يبقى لسه فيه مشكلة كاش في المتصفح
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">What Our Clients Say</h2>
            <div className="row">
                {loading ? (
                    <p className="text-center">Loading testimonials...</p>
                ) : show.length === 0 ? (
                    <p className="text-center">No testimonials available at the moment.</p>
                ) : (
                    show.map((item) => (
                        <div className="col-md-4 mb-4" key={item._id}>
                            <div className="card h-100 shadow-sm border-primary">
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
                                    <div className="mb-2">
                                        {"⭐".repeat(Number(item.rate) || 0)}
                                    </div>
                                    <p className="card-text">"{item.comments}"</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Formshow;