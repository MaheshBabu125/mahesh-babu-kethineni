import React from 'react';

export const Contact = () => {
  return (
    <main className="p-6 mt-20">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        We'd love to hear from you! Feel free to reach out with questions, suggestions, or feedback.
      </p>
      <form className="grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
};
