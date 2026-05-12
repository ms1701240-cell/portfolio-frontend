import { useState } from "react";
import axios from 'axios';

const Form = () => {
    const [form, setform] = useState({
        email: '',
        rate: 5,
        comments: ''
    });

    const sumbited = async (e) => {
        e.preventDefault();
        try {
            // الرابط ده هو اللي Vercel مفعله حالياً كـ Ready
            await axios.post('https://portfolio-api-five-henna.vercel.app/feedbacksaved', form);
            alert('تم بنجاح شكرا علي رسالتك');
            setform({ email: '', rate: 5, comments: '' });
            window.location.reload(); // عشان يحدث البيانات المعروضة
        } catch (err) {
            alert('فشل الاتصال');
            console.error(err);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" >
        <div className="container p-4 mt-5 border border-dark border-5 bg-light shadow-lg rounded-4">
            <h5 className="card-title text-center  fs-3 mb-4">Feedback</h5>
            <form className="" onSubmit={sumbited}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" required
                        onChange={(e) => setform({ ...form, email: e.target.value })} value={form.email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Rate (1-5)</label>
                    <input type="number" className="form-control" min="1" max="5" required
                        onChange={(e) => setform({ ...form, rate: e.target.value })} value={form.rate} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Comments</label>
                    <textarea className="form-control" rows="3" required
                        onChange={(e) => setform({ ...form, comments: e.target.value })} value={form.comments}></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Form;