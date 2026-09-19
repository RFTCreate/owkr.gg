
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ContentStatus = "draft" | "needs_review" | "published";

export type PlayerRole = "tank" | "dps" | "support";

export type DeviceCategory =
  | "mouse"
  | "keyboard"
  | "mousepad"
  | "monitor"
  | "audio";

export type AliasLanguage = "ja" | "ko" | "en";

export interface Database {
  public: {
    Tables: {
      players: {
        Row: {
          id: string;

          slug: string;

          english_name: string;
          korean_name: string;
          japanese_name: string;

          team_id: string | null;

          role: PlayerRole;

          nationality: string | null;
          birthday: string | null;

          main_heroes: string[];

          dpi: number | null;
          sensitivity: number | null;
          scoped_sensitivity: number | null;
          polling_rate: number | null;

          x_url: string | null;
          youtube_url: string | null;
          twitch_url: string | null;
          chzzk_url: string | null;
          instagram_url: string | null;
          afreecatv_url: string | null;

          image_url: string | null;

          status: ContentStatus;

          created_at: string;
          updated_at: string;
        };

        Insert: {
          id?: string;

          slug: string;

          english_name: string;
          korean_name: string;
          japanese_name: string;

          team_id?: string | null;

          role: PlayerRole;

          nationality?: string | null;
          birthday?: string | null;

          main_heroes?: string[];

          dpi?: number | null;
          sensitivity?: number | null;
          scoped_sensitivity?: number | null;
          polling_rate?: number | null;

          x_url?: string | null;
          youtube_url?: string | null;
          twitch_url?: string | null;
          chzzk_url?: string | null;
          instagram_url?: string | null;
          afreecatv_url?: string | null;

          image_url?: string | null;

          status?: ContentStatus;

          created_at?: string;
          updated_at?: string;
        };

        Update: Partial<
          Database["public"]["Tables"]["players"]["Insert"]
        >;
      };

      teams: {
        Row: {
          id: string;
          slug: string;
          name: string;
          short_name: string;

          logo_url: string | null;

          status: ContentStatus;

          created_at: string;
          updated_at: string;
        };

        Insert: {
          id?: string;
          slug: string;
          name: string;
          short_name: string;

          logo_url?: string | null;

          status?: ContentStatus;

          created_at?: string;
          updated_at?: string;
        };

        Update: Partial<Database["public"]["Tables"]["teams"]["Insert"]>;
      };

      brands: {
        Row: {
          id: string;
          slug: string;
          name: string;

          logo_url: string | null;
          official_url: string | null;

          status: ContentStatus;

          created_at: string;
          updated_at: string;
        };

        Insert: {
          id?: string;
          slug: string;
          name: string;

          logo_url?: string | null;
          official_url?: string | null;

          status?: ContentStatus;

          created_at?: string;
          updated_at?: string;
        };

        Update: Partial<Database["public"]["Tables"]["brands"]["Insert"]>;
      };

      devices: {
        Row: {
          id: string;

          slug: string;
          name: string;

          brand_id: string;

          category: DeviceCategory;

          image_url: string | null;

          amazon_url: string | null;
          amazon_asin: string | null;

          connection: string | null;
          sensor: string | null;
          weight: number | null;
          size: string | null;

          status: ContentStatus;

          created_at: string;
          updated_at: string;
        };

        Insert: {
          id?: string;

          slug: string;
          name: string;

          brand_id: string;

          category: DeviceCategory;

          image_url?: string | null;

          amazon_url?: string | null;
          amazon_asin?: string | null;

          connection?: string | null;
          sensor?: string | null;
          weight?: number | null;
          size?: string | null;

          status?: ContentStatus;

          created_at?: string;
          updated_at?: string;
        };

        Update: Partial<Database["public"]["Tables"]["devices"]["Insert"]>;
      };

      device_usage: {
        Row: {
          id: string;

          player_id: string;
          device_id: string;

          is_current: boolean;

          created_at: string;
          updated_at: string;
        };

        Insert: {
          id?: string;

          player_id: string;
          device_id: string;

          is_current?: boolean;

          created_at?: string;
          updated_at?: string;
        };

        Update: Partial<
          Database["public"]["Tables"]["device_usage"]["Insert"]
        >;
      };

      shorts: {
        Row: {
          id: string;

          player_id: string;

          youtube_url: string;
          youtube_video_id: string;

          title: string;
          thumbnail_url: string | null;

          published_at: string | null;

          status: ContentStatus;

          created_at: string;
          updated_at: string;
        };

        Insert: {
          id?: string;

          player_id: string;

          youtube_url: string;
          youtube_video_id: string;

          title: string;
          thumbnail_url?: string | null;

          published_at?: string | null;

          status?: ContentStatus;

          created_at?: string;
          updated_at?: string;
        };

        Update: Partial<Database["public"]["Tables"]["shorts"]["Insert"]>;
      };

      search_aliases: {
        Row: {
          id: string;

          player_id: string;

          alias: string;
          language: AliasLanguage;

          created_at: string;
        };

        Insert: {
          id?: string;

          player_id: string;

          alias: string;
          language: AliasLanguage;

          created_at?: string;
        };

        Update: Partial<
          Database["public"]["Tables"]["search_aliases"]["Insert"]
        >;
      };
    };

    Views: {
      device_usage_summary: {
        Row: {
          device_id: string;
          slug: string;
          name: string;
          category: DeviceCategory;
          brand_id: string;
          player_count: number;
        };
      };
    };

    Functions: {
      calculate_edpi: {
        Args: {
          dpi: number;
          sensitivity: number;
        };
        Returns: number;
      };

      calculate_usage_percent: {
        Args: {
          player_count: number;
          total_players: number;
        };
        Returns: number;
      };
    };

    Enums: {
      content_status: ContentStatus;
      player_role: PlayerRole;
      device_category: DeviceCategory;
      alias_language: AliasLanguage;
    };
  };
}
