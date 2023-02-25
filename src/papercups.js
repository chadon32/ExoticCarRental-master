import React from "react";
import {ChatWidget} from "@papercups-io/chat-widget";

const ExamplePage = () => {
    return (
      <>
        {/*
          Put <ChatWidget /> at the bottom of whatever pages you would
          like to render the widget on, or in your root/router component
          if you would like it to render on every page
        */}
        <ChatWidget
          // `accountId` is used instead of `token` in older versions
          // of the @papercups-io/chat-widget package (before v1.2.x).
          // You can delete this line if you are on the latest version.
          // accountId="7e33a506-6470-45b7-b256-5026dc8609be"
          token="7e33a506-6470-45b7-b256-5026dc8609be"
          inbox="d54a2de7-09dc-4d6e-ab92-2c4e071991ec"
          title="Welcome to DogeExotics"
          subtitle="Ask us about our rentals 😊"
          primaryColor="#eb144c"
          newMessagePlaceholder="Start typing..."
          showAgentAvailability={false}
          agentAvailableText="We're online right now!"
          agentUnavailableText="We're away at the moment."
          requireEmailUpfront={false}
          iconVariant="outlined"
          baseUrl="https://app.papercups.io"
          // Optionally include data about your customer here to identify them
          // customer={{
          //   name: __CUSTOMER__.name,
          //   email: __CUSTOMER__.email,
          //   external_id: __CUSTOMER__.id,
          //   metadata: {
          //     plan: "premium"
          //   }
          // }}
      />
    </>
  );
};

export default ExamplePage;