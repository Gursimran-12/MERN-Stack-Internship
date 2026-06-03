export default function Button({ title }) {
    return (
        <div className="bg-black text-white my-4 rounded-3xl p-2 text-center hover:text-black hover:bg-gray-400">
            <p> {title} </p>

        </div>

    );
};