import React, { Component } from 'react';
import Section from './Section';
import styled from '@emotion/styled';

const labels = ['Good', 'Neutral', 'Bad'];

const Fancy = styled.div({
  textAlign: 'left',
});

class FeedbackStats extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <Fancy>
        <Section title="Please leave feedback" />

        <Section title="Statistics" />

        </Fancy>
      </div>
    )
  }
}

export default FeedbackStats;