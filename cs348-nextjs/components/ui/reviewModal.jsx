export default function ({ cityName, rating, setRating, reviewText, setReviewText, handleSubmit, handleEdit, reviewEdit, setShowModal }) {
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        if (reviewEdit) {
          handleEdit();
        } else {
          handleSubmit(e);
        }
      };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Leave a Review for {cityName}</h2>
            <form onSubmit={onFormSubmit}>
                <label className="block mb-2">
                Rating (1-5):
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="border rounded-md p-2 w-full"
                />
                </label>

                <label className="block mb-4">
                Review:
                <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="border rounded-md p-2 w-full"
                    rows="3"
                    placeholder="Write your review here..."
                />
                </label>

                <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-400 text-white rounded-md"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                    Submit Review
                </button>
                </div>
            </form>
            </div>
        </div>
    )
}