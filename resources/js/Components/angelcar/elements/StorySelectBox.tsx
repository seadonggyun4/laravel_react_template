import React from "react";
import styled from "styled-components";



// Data type definition
interface Story {
    image: string;
    title: string;
    year: string;
}

interface StorySelectBoxProps {
    stories: Story[];
}

const StorySelectBox: React.FC<StorySelectBoxProps> = ({ stories }) => {
    // Split stories into 3 columns
    const columns = [
        stories.filter((_, i) => i % 3 === 0),
        stories.filter((_, i) => i % 3 === 1),
        stories.filter((_, i) => i % 3 === 2),
    ];

    return (
        <Columns>
            {columns.map((columnStories, columnIndex) => (
                <Column key={columnIndex} reverse={columnIndex % 2 === 0}>
                    {columnStories.map((story, index) => (
                        <Item key={index}>
                            <ImageWrap>
                                <img src={story.image} alt={story.title} />
                            </ImageWrap>
                            <Caption>
                                <span>{story.title}</span> <br /> <span>{story.year}</span>
                            </Caption>
                        </Item>
                    ))}
                </Column>
            ))}
        </Columns>
    );
};

export default StorySelectBox;


// Styled Components
const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow-y: hidden;
    background: red;
`;

const Column = styled.div<{ reverse?: boolean }>`
  --column-offset: 10vh;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  padding: var(--column-offset) 0;
  animation: ${({ reverse }) => (reverse ? "adjust-position" : "none")} linear forwards;
  animation-timeline: scroll(root block);

  @keyframes adjust-position {
    from {
      transform: translateY(calc(-100% + 100vh));
    }
    to {
      transform: translateY(calc(100% - 100vh));
    }
  }
`;

const Item = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 0.75;
  border-radius: 1em;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Caption = styled.figcaption`
  text-align: center;
  margin-top: 0.5rem;
`;



