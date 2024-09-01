import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = ({ texts, delays, loop = false,color  }) => {
  return (
    <div style={{ color }}>
      {texts.map((text, index) => (
        <Typewriter
          key={index}
          options={{
            strings: [text],
            autoStart: true,
            loop: loop,
            delay: delays[index],
          }}
        />
      ))}
    </div>
  );
};

export default TypeWriter;
