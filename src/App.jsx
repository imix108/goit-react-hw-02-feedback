import React, { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  
  const Notification = ({ message }) => {
  return <p>{message}</p>;
};

  const handleFeedback = type => {
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackCounts;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((feedbackCounts.good / total) * 100);
  };

  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={totalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given- All data hidden" />
        )}
      </Section>
    </div>
  );
};

export default App;
