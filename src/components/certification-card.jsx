"use client";

import { FileText, Download, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CertificationCard({ name, issuer, date, category, pdfUrl }) {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 overflow-hidden group hover:border-cyan-500/50 transition-all h-full flex flex-col">
      <div className="relative h-36 sm:h-40 w-full bg-zinc-900/80 flex items-center justify-center border-b border-zinc-700">
        <FileText className="w-12 h-12 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
        {category && (
          <div className="absolute top-3 left-3 text-xs text-cyan-400 bg-zinc-900/80 px-2 py-1 rounded">
            {category}
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-medium text-sm sm:text-base leading-snug">
            {name}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            {issuer} • {date}
          </p>
        </div>

        {pdfUrl ? (
          <div className="mt-auto flex flex-wrap gap-2">
            <Button asChild size="sm" variant="outline" className="text-xs">
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="w-3 h-3 mr-1" />
                Preview
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="text-xs bg-cyan-600 hover:bg-cyan-500"
            >
              <a href={pdfUrl} download>
                <Download className="w-3 h-3 mr-1" />
                Download
              </a>
            </Button>
          </div>
        ) : (
          <p className="mt-auto text-xs text-zinc-500">
            Certificate file not available
          </p>
        )}
      </div>
    </Card>
  );
}
