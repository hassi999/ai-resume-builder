import { Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  const handleCreateResume = () => {
  if (!resumeTitle.trim()) return;

  navigate("/resume/new", {
    state: {
      title: resumeTitle.trim(),
    },
  });

  setOpen(false);
};

  

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600" />

            <span className="text-sm font-medium text-purple-600">
              AI Resume Builder
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            My Resumes
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            Create, manage, and improve your resumes with AI. Build a
            professional resume that helps you stand out.
          </p>
        </div>

        {/* Resume Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Create Resume Card */}
          <button
            onClick={() => setOpen(true)}
            className="group flex min-h-[360px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white p-6 transition-all duration-200 hover:border-purple-400 hover:bg-purple-50/30 hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 transition-all duration-200 group-hover:scale-110 group-hover:bg-purple-200">
              <Plus className="h-8 w-8 text-purple-600" />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-900">
              Create New Resume
            </h2>

            <p className="mt-2 max-w-[230px] text-center text-sm leading-6 text-gray-500">
              Start building a professional resume with the help of AI.
            </p>
          </button>

        </div>
      </div>

      {/* Create Resume Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>

            <DialogDescription>
              Give your resume a title to get started.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <label
              htmlFor="resume-title"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Resume Title
            </label>

            <Input
              id="resume-title"
              value={resumeTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
  setResumeTitle(e.target.value)
}
              placeholder="e.g. Frontend Developer Resume"
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="button"
              onClick={handleCreateResume}
              disabled={!resumeTitle.trim()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
            >
              Create Resume
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;