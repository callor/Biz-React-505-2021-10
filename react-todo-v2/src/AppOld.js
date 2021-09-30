import React from "react";

function AppOld() {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div>오늘할일</div>
        <section>
          <TdoInput />
        </section>
        <section>
          <TodList />
        </section>
      </main>
    </AppContextProvider>
  );
}

export default AppOld;
