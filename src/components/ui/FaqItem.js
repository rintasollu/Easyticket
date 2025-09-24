// src/components/ui/FaqItem.js

import { FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

export default function FaqItem({ question, answer }) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-md">
        <FaQuestionCircle className="mt-1 flex-shrink-0 text-purple-500" />
        <p className="font-semibold">{question}</p>
      </div>
      <div className="ml-6 flex items-start gap-3 rounded-xl bg-purple-600 p-4 text-white shadow-md">
        <FaCheckCircle className="mt-1 flex-shrink-0 text-white" />
        <p>{answer}</p>
      </div>
    </div>
  );
}