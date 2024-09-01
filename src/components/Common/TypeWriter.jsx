import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = ({ texts, delays, loop = false, style = {},ref  }) => {
  return (
    <>
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
    </>
  );
};

export default TypeWriter;
