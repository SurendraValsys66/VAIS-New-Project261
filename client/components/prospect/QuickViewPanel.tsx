import React from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Download,
  MoreVertical,
  ExternalLink,
  Building,
  Users,
  Briefcase,
  DollarSign,
  Globe,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Prospect {
  id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  email: string;
  phone?: string;
  linkedinUrl?: string;
  profileImageUrl?: string;
  city?: string;
  country?: string;
  jobLevel?: string;
  jobFunction?: string;
  industry?: string;
  companySize?: string;
  revenue?: string;
  yearsAtCompany?: number;
  intentSignal?: string;
  engagementScore?: number;
}

interface QuickViewPanelProps {
  prospect: Prospect;
  onExport?: () => void;
  onTag?: () => void;
  onMoreOptions?: () => void;
  maskEmail?: (email: string) => string;
}

const defaultMaskEmail = (email: string) => {
  const [localPart, domain] = email.split("@");
  if (localPart.length <= 2) return email;
  return localPart.substring(0, 2) + "***@" + domain;
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  isLink?: boolean;
  href?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({
  icon,
  label,
  value,
  isLink,
  href,
}) => {
  return (
    <div className="flex gap-3 pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
      <div className="flex-shrink-0 text-gray-400 mt-0.5">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-gray-600 font-medium mb-1">{label}</p>
        {isLink && href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium break-all hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-gray-900 font-medium break-all">{value}</p>
        )}
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide px-4 py-3 bg-gray-50 sticky top-0">
        {title}
      </h3>
      <div className="px-4 py-3 space-y-3 text-sm">{children}</div>
    </div>
  );
};

export const QuickViewPanel: React.FC<QuickViewPanelProps> = ({
  prospect,
  onExport,
  onTag,
  onMoreOptions,
  maskEmail = defaultMaskEmail,
}) => {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-900">Quick View</h2>
          <Button
            variant="ghost"
            size="sm"
            className="h-5 w-5 p-0"
            onClick={onMoreOptions}
          >
            <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
          </Button>
        </div>

        {/* Prospect Header */}
        <div className="px-4 py-3 border-t">
          <div className="flex gap-3 mb-3">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage
                src={prospect.profileImageUrl}
                alt={prospect.fullName}
              />
              <AvatarFallback className="bg-blue-500 text-white text-xs font-semibold">
                {prospect.firstName[0]}
                {prospect.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm">
                {prospect.fullName}
              </h3>
              <p className="text-xs text-gray-600">
                {prospect.jobTitle}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {prospect.companyName}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-7 text-xs"
              onClick={onExport}
            >
              <Download className="w-3 h-3 mr-1.5" />
              Export
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 h-7 text-xs"
              onClick={onTag}
            >
              Tag
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="w-7 h-7 p-0 flex-shrink-0"
              onClick={onMoreOptions}
            >
              <MoreVertical className="w-3.5 h-3.5 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Contact Details */}
        <Section title="Main Contact Details">
          <div className="space-y-3">
            <InfoItem
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value={maskEmail(prospect.email)}
              isLink={true}
              href={`mailto:${prospect.email}`}
            />
            {prospect.phone && (
              <InfoItem
                icon={<Phone className="w-4 h-4" />}
                label="Phone"
                value={prospect.phone}
              />
            )}
            {prospect.linkedinUrl && (
              <InfoItem
                icon={<Linkedin className="w-4 h-4" />}
                label="LinkedIn"
                value="View Profile"
                isLink={true}
                href={prospect.linkedinUrl}
              />
            )}
          </div>
        </Section>

        {/* Additional Contact Details */}
        {prospect.phone && (
          <Section title="Additional Contact Details">
            <InfoItem
              icon={<Phone className="w-4 h-4" />}
              label="Phone"
              value={prospect.phone}
            />
          </Section>
        )}

        {/* Location */}
        {prospect.city && prospect.country && (
          <Section title="Location">
            <InfoItem
              icon={<MapPin className="w-4 h-4" />}
              label="Address"
              value={`${prospect.city}, ${prospect.country}`}
            />
          </Section>
        )}

        {/* CRM Info */}
        <Section title="CRM">
          <div className="text-xs text-gray-500">
            No CRM contact or account owner
          </div>
        </Section>

        {/* Company Details */}
        <Section title="Company Details">
          <div className="space-y-4">
            {/* Company Header */}
            <div className="flex gap-2 items-start">
              <Building className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-600 font-medium mb-1">
                  {prospect.companyName}
                </p>
                <a
                  href="#"
                  className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  View
                </a>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-xs text-gray-600 font-medium mb-1">
                Description
              </p>
              <p className="text-xs text-gray-700">
                {prospect.companyName} is a leading company in their industry.
              </p>
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">
                Show More
              </button>
            </div>

            {/* HQ Location */}
            {prospect.city && prospect.country && (
              <div>
                <p className="text-xs text-gray-600 font-medium mb-1">
                  HQ Location
                </p>
                <p className="text-xs text-gray-700">
                  {prospect.city}, {prospect.country}
                </p>
              </div>
            )}

            {/* Employees */}
            {prospect.companySize && (
              <div className="flex gap-3">
                <Users className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-600 font-medium mb-1">
                    Employees
                  </p>
                  <p className="text-xs text-gray-700">{prospect.companySize}</p>
                </div>
              </div>
            )}

            {/* Revenue */}
            {prospect.revenue && (
              <div className="flex gap-3">
                <DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-600 font-medium mb-1">
                    Revenue
                  </p>
                  <p className="text-xs text-gray-700">{prospect.revenue}</p>
                </div>
              </div>
            )}

            {/* Industry */}
            {prospect.industry && (
              <div className="flex gap-3">
                <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-600 font-medium mb-1">
                    Industry
                  </p>
                  <p className="text-xs text-gray-700">{prospect.industry}</p>
                  <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">
                    See all
                  </button>
                </div>
              </div>
            )}

            {/* Years at Company */}
            {prospect.yearsAtCompany && (
              <div>
                <p className="text-xs text-gray-600 font-medium mb-1">
                  Tenure
                </p>
                <p className="text-xs text-gray-700">
                  {prospect.yearsAtCompany} years
                </p>
              </div>
            )}

            {/* Job Function */}
            {prospect.jobFunction && (
              <div>
                <p className="text-xs text-gray-600 font-medium mb-1">
                  Function
                </p>
                <p className="text-xs text-gray-700">{prospect.jobFunction}</p>
              </div>
            )}
          </div>
        </Section>

        {/* Job Level */}
        {prospect.jobLevel && (
          <Section title="Job Level">
            <div className="text-xs">
              <p className="text-gray-700 font-medium">{prospect.jobLevel}</p>
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};
