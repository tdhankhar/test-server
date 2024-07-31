const run = async () => {
  console.log("TEST WORKFLOW STARTED");
  await setTimeout(() => console.log("TEST WORKFLOW COMPLETED"), 10000);
};

run();
