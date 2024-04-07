"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AddProject } from "./AddProject";
import { DeleteModal } from "./DeleteModal";
import { getProjects } from "@/data/projects";
import Loading from "../Loading";
import { signOut } from "next-auth/react";
import { singleProject } from "@/data/interface";
export const DashboardWrapper = () => {
  const [addEditModal, setaddEditModal] = useState<string | null>(null);
  const [deleteModal, setdeleteModal] = useState<boolean>(false);
  const [projects, setprojects] = useState<singleProject[]>();
  const [selectedProject, setselectedProject] = useState<number>(0);
  useEffect(() => {
    const getData = async () => {
      const response = await getProjects();
      setprojects(response as any);
    };
    getData();
  }, []);

  if (!projects)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );

  const onLogout = async () => {
    await signOut();
  };

  return (
    <>
      <div className="w-[60%] space-y-4">
        <header className="flex items-center justify-between">
          SOUFIANECODE
          <Button onClick={onLogout}>Log out</Button>
        </header>
        <div className="w-full space-y-4">
          {projects?.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 rounded-lg border "
            >
              <b>{item.title}</b>
              <div className="flex items-center gap-x-2">
                <Button
                  onClick={() => {
                    setaddEditModal("edit");
                    setselectedProject(index);
                  }}
                >
                  edit
                </Button>
                <Button
                  onClick={() => {
                    setdeleteModal(true);
                    setselectedProject(index);
                  }}
                  variant={"destructive"}
                  className="text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button onClick={() => setaddEditModal("add")}>Add new Project</Button>
      </div>
      {addEditModal === "add" && (
        <AddProject
          project={undefined}
          edit={false}
          setaddEditModal={setaddEditModal}
        />
      )}
      {addEditModal === "edit" && (
        <AddProject
          project={projects[selectedProject]}
          edit
          setaddEditModal={setaddEditModal}
        />
      )}

      {deleteModal && (
        <DeleteModal
          id={projects[selectedProject].id}
          setDeleteModal={setdeleteModal}
        />
      )}
    </>
  );
};
