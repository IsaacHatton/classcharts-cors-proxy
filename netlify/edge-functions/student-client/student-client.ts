import {
  StudentClient,
} from "https://deno.land/x/classcharts_api@v2.9.0/mod.ts";
export default async (request: Request) => {
  try {
    // get the url parameters
    const params = new URL(request.url).searchParams;
    // get the parameter called "loginID"
    let loginID = "";
    if (params.get("loginID") !== null) {
      loginID = params.get("loginID")!;
    }
    // get the parameter called "dob"
    let dob = "";
    if (params.get("dob") !== null) {
      dob = params.get("dob")!;
    }
    // login to classcharts
    const client = new StudentClient(loginID, dob);
    await client.login();
    // get the parameter called command
    const command = params.get("command");
    // check if the command requested exists
    if (command == "getStudentInfo") {
      const studentInfo = await client.getStudentInfo();
      const response = new Response(JSON.stringify(studentInfo), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getActivity") {
      // get url param args if its not null
      let args = {};
      if (params.get("args") !== null) {
        // convert args to json
        args = JSON.parse(params.get("args")!);
      }
      const activity = await client.getActivity(args);
      const response = new Response(JSON.stringify(activity), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getFullActivity") {
      // get url param args if its not null
      type argsType = {
        from: string;
        to: string;
      };
      let args: argsType = {
        from: "",
        to: "",
      };
      if (params.get("args") !== null) {
        // convert args to json
        args = JSON.parse(params.get("args")!);
      }
      args.from = args.from || "";
      args.to = args.to || "";
      const activity = await client.getFullActivity(args);
      const response = new Response(JSON.stringify(activity), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getBehaviour") {
      // get url param args if its not null
      let args = {};
      if (params.get("args") !== null) {
        // convert args to json
        args = JSON.parse(params.get("args")!);
      }
      const behaviour = await client.getBehaviour(args);
      const response = new Response(JSON.stringify(behaviour), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getHomeworks") {
      // get url param args if its not null
      let args = {};
      if (params.get("args") !== null) {
        // convert args to json
        args = JSON.parse(params.get("args")!);
      }
      const homeworks = await client.getHomeworks(args);
      const response = new Response(JSON.stringify(homeworks), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getLessons") {
      // get url param args if its not null
      type argsType = {
        date: string;
      };
      let args: argsType = {
        date: "",
      };
      if (params.get("args") !== null) {
        // convert args to json
        args = JSON.parse(params.get("args")!);
      }
      const lessons = await client.getLessons(args);
      const response = new Response(JSON.stringify(lessons), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getBadges") {
      const badges = await client.getBadges();
      const response = new Response(JSON.stringify(badges), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getAnnouncements") {
      const announcements = await client.getAnnouncements();
      const response = new Response(JSON.stringify(announcements), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getDetentions") {
      const detentions = await client.getDetentions();
      const response = new Response(JSON.stringify(detentions), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else if (command == "getAttendance") {
      const attendance = await client.getAttendance();
      const response = new Response(JSON.stringify(attendance), {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      return response;
    } else {
      const response = new Response(
        JSON.stringify({
          error: "Command not found",
        }),
        {
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        },
      );
      return response;
    }
  } catch (e) {
    const response = new Response(
      JSON.stringify({
        error: e.message,
      }),
      {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
    return response;
  }
};
